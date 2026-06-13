import re

with open("src/app/properties/new/step3/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Add useState import
content = content.replace('import Link from "next/link";', 'import Link from "next/link";\nimport { useState } from "react";')

# Add state and calculations
state_logic = """
export default function NewPropertyStep3Page() {
  const [rent, setRent] = useState<number>(0);
  const [otherIncome, setOtherIncome] = useState<number>(0);
  const [maintenance, setMaintenance] = useState<number>(0);
  const [capRate, setCapRate] = useState<number>(0);

  const annualIncome = (rent + otherIncome) * 12;
  const annualExpenses = maintenance * 12;
  const noi = annualIncome - annualExpenses;
  const targetPrice = capRate > 0 ? noi / (capRate / 100) : 0;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };
"""
content = content.replace("export default function NewPropertyStep3Page() {", state_logic)

with open("src/app/properties/new/step3/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)
