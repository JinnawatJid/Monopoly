"use client";
import Link from "next/link";
import { useState } from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";
import { NavigationDrawer } from "@/components/layout/NavigationDrawer";


export default function NewPropertyStep3Page() {
  const [rent, setRent] = useState<string>('');
  const [otherIncome, setOtherIncome] = useState<string>('');
  const [maintenance, setMaintenance] = useState<string>('');
  const [capRate, setCapRate] = useState<string>('');

  // New State for Trading/Transfer Fees
  const [tradingPrice, setTradingPrice] = useState<string>('');
  const [appraisalValue, setAppraisalValue] = useState<string>('');
  const [loanAmount, setLoanAmount] = useState<string>('');
  const [appraisalFee, setAppraisalFee] = useState<string>('');
  const [withholdingTax, setWithholdingTax] = useState<string>('');

  const [taxType, setTaxType] = useState<'sbt' | 'stamp'>('sbt');
  const [feeSplit, setFeeSplit] = useState<'seller' | 'half' | 'buyer'>('half');

const handleNumberInput = (setter: (val: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9.]/g, '');
    let parts = rawValue.split('.');
    if (parts.length > 2) {
      parts = [parts[0], parts.slice(1).join('')];
    }
    if (parts[0]) {
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    setter(parts.join('.'));
  };

  const parseValue = (val: string) => Number(val.replace(/,/g, '')) || 0;

  const rentNum = parseValue(rent);
  const otherIncomeNum = parseValue(otherIncome);
  const maintenanceNum = parseValue(maintenance);
  const capRateNum = parseValue(capRate);

  // Parse new state values
  const tradingPriceNum = parseValue(tradingPrice);
  const appraisalValueNum = parseValue(appraisalValue);
  const loanAmountNum = parseValue(loanAmount);

  // Calculate specific fees
  const transferFee = appraisalValueNum * 0.02; // 2% of appraisal value
  const mortgageFee = loanAmountNum * 0.01; // 1% of loan amount

  // Tax calculation based on the higher of trading price or appraisal value
  const taxBaseAmount = Math.max(tradingPriceNum, appraisalValueNum);
  const calculatedTax = taxType === 'sbt'
    ? taxBaseAmount * 0.033 // Specific Business Tax 3.3%
    : taxBaseAmount * 0.005; // Stamp Duty 0.5%

  const annualIncome = (rentNum + otherIncomeNum) * 12;
  const annualExpenses = maintenanceNum * 12;
  const noi = annualIncome - annualExpenses;
  const targetPrice = capRateNum > 0 ? noi / (capRateNum / 100) : 0;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
      <TopAppBar />

      <main className="flex-grow flex flex-col md:flex-row max-w-container-max mx-auto w-full md:gap-stack-lg">
        <NavigationDrawer />

        {/* Main Content */}
        <div className="flex-grow p-margin-mobile md:p-margin-desktop max-w-4xl pb-32 md:pb-margin-desktop">
          <div>
            {/* Progress Header */}
            <div className="mb-6">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <span className="text-primary font-label-md uppercase tracking-wider">
                    Quantitative Analysis
                  </span>
                  <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-1">
                    วิเคราะห์เชิงปริมาณ
                  </h2>
                </div>
                <span className="font-label-md text-primary">
                  ขั้นตอนที่ 3 จาก 4
                </span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: "75%" }}
                ></div>
              </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-md">
              {/* Section: Income */}
              <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined">payments</span>
                  <h3 className="font-headline-md">รายรับ</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block font-label-md text-on-surface mb-1">
                      ค่าเช่าโดยประมาณ
                    </label>
                    <div className="relative">
                      <input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        inputMode="numeric"
                        placeholder="0.00"
                        type="text"
                        value={rent}
                        onChange={handleNumberInput(setRent)}
                      />
                      <span className="absolute right-4 top-3 text-secondary">
                        บาท/เดือน
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-on-surface mb-1">
                      รายได้อื่นๆ
                    </label>
                    <div className="relative">
                      <input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        inputMode="numeric"
                        placeholder="0.00"
                        type="text"
                        value={otherIncome}
                        onChange={handleNumberInput(setOtherIncome)}
                      />
                      <span className="absolute right-4 top-3 text-secondary">
                        บาท/เดือน
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Expenses */}
              <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined">receipt_long</span>
                  <h3 className="font-headline-md">รายจ่าย</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block font-label-md text-on-surface mb-1">
                      ค่าส่วนกลาง / ค่าบริหารจัดการ
                    </label>
                    <div className="relative">
                      <input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        inputMode="numeric"
                        placeholder="0.00"
                        type="text"
                        value={maintenance}
                        onChange={handleNumberInput(setMaintenance)}
                      />
                      <span className="absolute right-4 top-3 text-secondary">
                        บาท/เดือน
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Purchase Price Estimation (New) */}
              <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col gap-4 lg:col-span-2">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined">analytics</span>
                  <h3 className="font-headline-md">
                    ประเมินราคาซื้อ
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-surface-container rounded-lg p-4">
                    <span className="font-label-sm text-secondary">
                      รายรับรวมต่อปี
                    </span>
                    <div className="text-lg font-bold text-on-surface">{formatCurrency(annualIncome)}</div>
                  </div>
                  <div className="bg-surface-container rounded-lg p-4">
                    <span className="font-label-sm text-secondary">
                      รายจ่ายรวมต่อปี
                    </span>
                    <div className="text-lg font-bold text-on-surface">{formatCurrency(annualExpenses)}</div>
                  </div>
                  <div className="bg-surface-container rounded-lg p-4">
                    <span className="font-label-sm text-secondary text-primary">
                      รายได้จากการดำเนินงานต่อปี (NOI)
                    </span>
                    <div className="text-lg font-bold text-primary">{formatCurrency(noi)}</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-outline-variant">
                  <label className="block font-label-md text-on-surface mb-1">
                    อัตราผลตอบแทนที่ต้องการ (%)
                  </label>
                  <div className="relative max-w-xs">
                    <input
                      className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      inputMode="decimal"
                      placeholder="0.00"
                      step="0.1"
                      type="text"
                      value={capRate}
                      onChange={handleNumberInput(setCapRate)}
                    />
                    <span className="absolute right-4 top-3 text-secondary">%</span>
                  </div>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-2 flex flex-col items-center justify-center gap-2">
                  <span className="font-label-md text-primary">
                    ราคาเสนอซื้อที่แนะนำ
                  </span>
                  <div className="text-4xl font-bold text-primary">{formatCurrency(targetPrice)}</div>
                </div>
              </section>
              {/* Refined Section: Trading/Transfer Fees */}
              <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col gap-4 lg:col-span-2">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                  <h3 className="font-headline-md">ค่าธรรมเนียมการซื้อขาย</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  {/* Input: Trading Price */}
                  <div>
                    <label className="block font-label-md text-on-surface mb-1">ราคาซื้อขาย</label>
                    <div className="relative">
                      <input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        inputMode="numeric"
                        placeholder="0.00"
                        type="text"
                        value={tradingPrice}
                        onChange={handleNumberInput(setTradingPrice)}
                      />
                      <span className="absolute right-4 top-3 text-secondary">บาท</span>
                    </div>
                  </div>
                  {/* Input: Appraised Value */}
                  <div>
                    <label className="block font-label-md text-on-surface mb-1">ราคาประเมิน</label>
                    <div className="relative">
                      <input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        inputMode="numeric"
                        placeholder="0.00"
                        type="text"
                        value={appraisalValue}
                        onChange={handleNumberInput(setAppraisalValue)}
                      />
                      <span className="absolute right-4 top-3 text-secondary">บาท</span>
                    </div>
                  </div>
                  {/* Input: Loan Amount */}
                  <div>
                    <label className="block font-label-md text-on-surface mb-1">วงเงินกู้</label>
                    <div className="relative">
                      <input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        inputMode="numeric"
                        placeholder="0.00"
                        type="text"
                        value={loanAmount}
                        onChange={handleNumberInput(setLoanAmount)}
                      />
                      <span className="absolute right-4 top-3 text-secondary">บาท</span>
                    </div>
                  </div>
                  {/* Input: Appraisal Fee */}
                  <div>
                    <label className="block font-label-md text-on-surface mb-1">ค่าประเมิน</label>
                    <div className="relative">
                      <input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        inputMode="numeric"
                        placeholder="0.00"
                        type="text"
                        value={appraisalFee}
                        onChange={handleNumberInput(setAppraisalFee)}
                      />
                      <span className="absolute right-4 top-3 text-secondary">บาท</span>
                    </div>
                  </div>
                  {/* Transfer Fee (2%) */}
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <label className="font-label-md text-on-surface">ค่าธรรมเนียมการโอน</label>
                      <span className="bg-primary/10 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded border border-primary/20">2%</span>
                    </div>
                    <div className="relative">
                      <input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-container-low"
                        placeholder="0.00"
                        readOnly
                        type="text"
                        value={formatCurrency(transferFee).replace('฿', '').trim()}
                      />
                      <span className="absolute right-4 top-3 text-secondary">บาท</span>
                    </div>
                  </div>
                  {/* Mortgage Fee (1%) */}
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <label className="font-label-md text-on-surface">ค่าจดจำนอง</label>
                      <span className="bg-primary/10 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded border border-primary/20">1%</span>
                    </div>
                    <div className="relative">
                      <input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-container-low"
                        placeholder="0.00"
                        readOnly
                        type="text"
                        value={formatCurrency(mortgageFee).replace('฿', '').trim()}
                      />
                      <span className="absolute right-4 top-3 text-secondary">บาท</span>
                    </div>
                  </div>
                  {/* Withholding Tax */}
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <label className="font-label-md text-on-surface">ภาษีเงินได้หัก ณ ที่จ่าย</label>
                      <a className="text-primary flex items-center gap-1 hover:underline" href="https://rdsrv2.rd.go.th/landwht/formcal1.asp" target="_blank" rel="noopener noreferrer">
                        <span className="text-[10px] font-bold">โปรแกรมคำนวณ</span>
                        <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                      </a>
                    </div>
                    <div className="relative">
                      <input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        inputMode="numeric"
                        placeholder="0.00"
                        type="text"
                        value={withholdingTax}
                        onChange={handleNumberInput(setWithholdingTax)}
                      />
                      <span className="absolute right-4 top-3 text-secondary">บาท</span>
                    </div>
                  </div>
                  {/* Tax Type Selection */}
                  <div>
                    <label className="block font-label-md text-on-surface mb-1">ประเภทภาษี</label>
                    <div className="flex bg-surface-container p-1 rounded-lg mb-2">
                      <button
                        type="button"
                        onClick={() => setTaxType('sbt')}
                        className={`flex-1 py-2 text-label-sm rounded-md transition-colors ${taxType === 'sbt' ? 'bg-white text-primary shadow-sm font-bold border border-outline-variant' : 'text-secondary hover:bg-surface-variant'}`}
                      >
                        ภาษีธุรกิจเฉพาะ 3.3%
                      </button>
                      <button
                        type="button"
                        onClick={() => setTaxType('stamp')}
                        className={`flex-1 py-2 text-label-sm rounded-md transition-colors ${taxType === 'stamp' ? 'bg-white text-primary shadow-sm font-bold border border-outline-variant' : 'text-secondary hover:bg-surface-variant'}`}
                      >
                        อากรแสตมป์ 0.5%
                      </button>
                    </div>
                    {/* Calculated Tax Amount display */}
                    <div className="relative">
                      <input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-container-low"
                        placeholder="0.00"
                        readOnly
                        type="text"
                        value={formatCurrency(calculatedTax).replace('฿', '').trim()}
                      />
                      <span className="absolute right-4 top-3 text-secondary">บาท</span>
                    </div>
                  </div>
                </div>
                {/* Fee Responsibility Split */}
                <div className="pt-4 border-t border-outline-variant">
                  <label className="block font-label-md text-on-surface mb-2">สัดส่วนการรับผิดชอบค่าธรรมเนียม</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setFeeSplit('seller')}
                      className={`py-3 rounded-lg text-label-sm transition-colors ${feeSplit === 'seller' ? 'border border-primary bg-primary/5 text-primary font-bold' : 'border border-outline text-secondary hover:bg-surface-variant'}`}
                    >
                      ผู้ขายจ่ายทั้งหมด
                    </button>
                    <button
                      type="button"
                      onClick={() => setFeeSplit('half')}
                      className={`py-3 rounded-lg text-label-sm transition-colors ${feeSplit === 'half' ? 'border border-primary bg-primary/5 text-primary font-bold' : 'border border-outline text-secondary hover:bg-surface-variant'}`}
                    >
                      คนละครึ่ง
                    </button>
                    <button
                      type="button"
                      onClick={() => setFeeSplit('buyer')}
                      className={`py-3 rounded-lg text-label-sm transition-colors ${feeSplit === 'buyer' ? 'border border-primary bg-primary/5 text-primary font-bold' : 'border border-outline text-secondary hover:bg-surface-variant'}`}
                    >
                      ผู้ซื้อจ่ายทั้งหมด
                    </button>
                  </div>
                </div>
              </section>
            </div>

            {/* Strategic Summary Bento Card */}
            <div className="mt-stack-lg p-6 bg-primary text-on-primary rounded-xl flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="font-label-md opacity-90">
                  รายได้จากการดำเนินงานต่อปี (NOI)
                </p>
                <h4 className="font-headline-lg-mobile md:font-headline-lg">
                  {formatCurrency(noi)}
                </h4>
              </div>
              <div className="h-px md:h-12 w-full md:w-px bg-on-primary/20"></div>
              <div className="text-center md:text-left">
                <p className="font-label-md opacity-90">ราคาเสนอซื้อ</p>
                <h4 className="font-headline-lg-mobile md:font-headline-lg">
                  {formatCurrency(targetPrice)}
                </h4>
              </div>

            </div>
          </div>

      {/* Sticky Action Bar */}
      <footer className="mt-8 bg-surface-container-lowest border-t border-outline-variant p-4 z-50 rounded-xl">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <Link
            href="/properties/new/step2"
            className="flex-1 md:flex-none md:w-40 h-12 rounded-full border border-secondary text-secondary font-label-md flex items-center justify-center gap-2 hover:bg-secondary/5 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span>ย้อนกลับ</span>
          </Link>
          <Link
            href="/properties/new/step4"
            className="flex-[2] md:flex-none md:w-64 h-12 rounded-full bg-primary text-on-primary font-label-md flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
          >
            <span>คำนวณและไปต่อ</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </footer>
      </div>
      </main>
    </div>
  );
}
