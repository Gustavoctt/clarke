import { useState } from "react";
import { FindSupplier } from "../../components/FindSupplier";
import { Header } from "../../components/Header";
import { AllSuppliers } from "../../components/AllSuppliers";
import { ISupplier } from "../../types";

// TODO: Add steps
// TODO: Get suppliers from db
// TODO: Create table to view suppliers
// TODO: Create modal to view unique supplier

export function Home() {
  const [suppliers, setSuppliers] = useState<ISupplier[]>([]);
  const [step, setStep] = useState("energyConsumption");
  // steps: [ energyConsumption, allSupliers ]

  return (
    <>
      <Header pageStep={step} setStep={setStep} />
      {step === "energyConsumption" && (
        <FindSupplier setStep={setStep} setSuppliers={setSuppliers} />
      )}
      {step === "allSupliers" && <AllSuppliers suppliersFilterd={suppliers} />}
    </>
  );
}
