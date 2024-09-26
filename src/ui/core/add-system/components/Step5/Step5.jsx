import React, { useMemo, useState } from "react";
import { Card, CodeInputCard, EmailInputCard, Panel } from "..";
import { AuthApi } from "api";

export const Step5 = (props) => {
  const [isLoadingNext, setIsLoadingNext] = useState(false);
  const [codeKey, setCodeKey] = useState(0);
  const panelActions = useMemo(() => {
    return {
      handlePrev: () => props.setCurrentStep(props.currentStep - 1),
      handleNext: async () => {
        setIsLoadingNext(true);
        try {
          const res = await AuthApi.verifyOtp({
            email: props.user.email,
            guid: props.user.guid,
            otp: props.user.otp,
          });
          if (!res.ok || !res.data) {
            throw new Error(res.message);
          }
          props.setUser({
            ...props.user,
            firstName: res.data.first_name,
            lastName: res.data.last_name,
            phone: res.data.phone_number,
            token: res.data.token,
          });
          setIsLoadingNext(false);
          props.setCurrentStep(props.currentStep + 1);
        } catch (err) {
          console.log("error type===>", err);
          setIsLoadingNext(false);
          if (
            err.message.toLowerCase().indexOf("invalid") >= 0 ||
            err.message.toLowerCase().indexOf("expire") >= 0
          ) {
            props.showToast(
              "The OTP you entered is incorrect. Please try again.",
              "error"
            );
            setCodeKey(codeKey + 1);
            props.setUser({ ...props.user, otp: "" });
          } else {
            props.showToast(err.message, "error");
          }
          console.log(err);
        }
      },
    };
  }, [props.setCurrentStep, props.currentStep, props.user]);

  return (
    <Panel
      title="System Scoping"
      actions={panelActions}
      isNextLoading={isLoadingNext}
    >
      {props.systems.map((system, id) => {
        return (
          <Card
            key={`system_${id}`}
            title={`System ${id + 1}`}
            expandable={true}
            autoActivable={true}
            isActive={false}
            cardInfo={`${system.calData.specifications.systemSize.pp500Panels} Panels`}
            isFrozen={true}
          />
        );
      })}
      <EmailInputCard
        email={props.user.email}
        changeEmail={() => props.setCurrentStep(props.currentStep - 1)}
      />
      <CodeInputCard
        email={props.user.email}
        guid={props.user.guid}
        otp={props.user.otp}
        setOtp={(v) => props.setUser({ ...props.user, otp: v })}
        onEndEditing={panelActions.handleNext}
        showToast={props.showToast}
        key={`codeinputcard_${codeKey}`}
        remount={() => setCodeKey(codeKey + 1)}
      />
    </Panel>
  );
};
