import React, { useMemo } from "react";
import { Card, CodeInputCard, EmailInputCard, Panel } from "..";
import { AuthApi } from "api";

export const Step5 = (props) => {
  const panelActions = useMemo(() => {
    return {
      handlePrev: () => props.setCurrentStep(props.currentStep - 1),
      handleNext: async () => {
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
          props.setCurrentStep(props.currentStep + 1);
        } catch (err) {
          console.log(err);
        }
      },
    };
  }, [props.setCurrentStep, props.currentStep, props.user]);

  return (
    <Panel title="System Scoping" actions={panelActions}>
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
        setOtp={(v) => props.setUser({ ...props.user, otp: v })}
      />
    </Panel>
  );
};
