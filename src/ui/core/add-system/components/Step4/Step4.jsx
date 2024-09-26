import React, { useMemo, useState } from "react";
import { Card, Panel } from "..";
import { TextInput } from "common/components";
import { Validations } from "common/validations";
import { AuthApi } from "api";

export const Step4 = (props) => {
  const [isLoadingNext, setIsLoadingNext] = useState(false);
  const panelActions = useMemo(() => {
    return {
      handlePrev: () => props.setCurrentStep(props.currentStep - 1),
      handleNext: async () => {
        setIsLoadingNext(true);
        const res = await AuthApi.SendOtp({ email: props.user.email });
        props.setUser({ ...props.user, guid: res.data.guid });
        setIsLoadingNext(false);
        props.setCurrentStep(props.currentStep + 1);
      },
    };
  }, [props.setCurrentStep, props.currentStep, props.user.email]);

  return (
    <Panel
      title="System Scoping"
      actions={panelActions}
      validNext={Validations.isValidEmail(props.user.email)}
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
      <Card title="Your Email:" isTitleLg={true}>
        <TextInput
          label="Email Address"
          value={props.user.email}
          onChange={(v) => props.setUser({ email: v })}
          hasError={
            !Validations.isValidEmail(props.user.email) &&
            typeof props.user.email === "string"
          }
          errorMessage="Not Valid Email"
        />
      </Card>
    </Panel>
  );
};
