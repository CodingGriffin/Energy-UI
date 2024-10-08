import React, { useMemo, useState } from "react";
import { Card, Panel } from "..";
import { TextInput } from "common/components";
import { Validations } from "common/validations";
import { AuthApi } from "api";

export const Step6 = (props) => {
  const [isNextLoading, setIsNextLoading] = useState(false);
  const panelActions = useMemo(() => {
    return {
      handlePrev: () => props.setCurrentStep(props.currentStep - 1),
      handleNext: async () => {
        try {
          setIsNextLoading(true);
          console.log("user===>", props.user);
          if (!props.user.token) {
            const res = await AuthApi.register({
              ...props.user,
              phoneNumber: props.user.phone,
              password: "123456",
            });
            if (!res.ok || !res.data) {
              throw new Error(res.message);
            }
          } else {
            // const res = await AuthApi.update({
            //   ...props.user,
            //   phoneNumber: props.user.phone,
            //   password: "123456",
            // });
            // if (!res.ok || !res.data) {
            //   throw new Error(res.message);
            // }
          }
          const res = await props.handleSubmit();
          if (!res.ok || !res.data) {
            throw new Error(res.message);
          }
          props.setCurrentStep(props.currentStep + 1);
        } catch (err) {
          console.log("====>", err);
        } finally {
          setIsNextLoading(false);
        }
      },
    };
  }, [props.setCurrentStep, props.currentStep, props.user]);

  return (
    <Panel
      title="System Scoping"
      actions={panelActions}
      isNextLoading={isNextLoading}
    >
      {props.systems.map((system, id) => {
        return (
          <Card
            key={`system_${id}`}
            title={`System ${id + 1}`}
            expandable={true}
            isActive={false}
            autoActivable={true}
            onActivate={() => setActiveSystem(id)}
            cardInfo={`${system.calData.specifications.systemSize.pp500Panels} Panels`}
          />
        );
      })}
      <Card title={"Your Email"} cardInfo={props.user.email} isTitleLg={true} />
      <Card title={"Provide Your details below"} isTitleLg={true}>
        <TextInput
          label={"First Name"}
          onChange={(v) => props.setUser({ ...props.user, firstName: v })}
          value={props.user.firstName}
          hasError={props.user.firstName === "" || !props.user.firstName}
          errorMessage={"required firstname"}
        />
        <TextInput
          label={"Last Name"}
          containerStyle={{ marginTop: "10px" }}
          onChange={(v) => props.setUser({ ...props.user, lastName: v })}
          value={props.user.lastName}
          hasError={props.user.lastName === "" || !props.user.lastName}
          errorMessage={"required lastname"}
        />
        <TextInput
          label={"Phone"}
          containerStyle={{ marginTop: "10px" }}
          onChange={(v) => props.setUser({ ...props.user, phone: v })}
          value={props.user.phone}
          hasError={!Validations.isValidPhone(props.user.phone)}
          errorMessage={"invalid phone number"}
        />
      </Card>
    </Panel>
  );
};
