import re

with open("src/app/properties/new/step3/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace inputs with state binding
content = content.replace('''<input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        inputMode="numeric"
                        placeholder="0.00"
                        type="number"
                      />''', '''<input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        inputMode="numeric"
                        placeholder="0.00"
                        type="number"
                        value={rent || ''}
                        onChange={(e) => setRent(Number(e.target.value) || 0)}
                      />''', 1)

content = content.replace('''<input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        inputMode="numeric"
                        placeholder="0.00"
                        type="number"
                      />''', '''<input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        inputMode="numeric"
                        placeholder="0.00"
                        type="number"
                        value={otherIncome || ''}
                        onChange={(e) => setOtherIncome(Number(e.target.value) || 0)}
                      />''', 1)

content = content.replace('''<input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        inputMode="numeric"
                        placeholder="0.00"
                        type="number"
                      />''', '''<input
                        className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        inputMode="numeric"
                        placeholder="0.00"
                        type="number"
                        value={maintenance || ''}
                        onChange={(e) => setMaintenance(Number(e.target.value) || 0)}
                      />''', 1)

content = content.replace('''<input
                      className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      inputMode="decimal"
                      placeholder="0.00"
                      step="0.1"
                      type="number"
                    />''', '''<input
                      className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      inputMode="decimal"
                      placeholder="0.00"
                      step="0.1"
                      type="number"
                      value={capRate || ''}
                      onChange={(e) => setCapRate(Number(e.target.value) || 0)}
                    />''', 1)

# Replace display values
content = content.replace('''<div className="text-lg font-bold text-on-surface">฿ 0.00</div>''', '''<div className="text-lg font-bold text-on-surface">{formatCurrency(annualIncome)}</div>''', 1)
content = content.replace('''<div className="text-lg font-bold text-on-surface">฿ 0.00</div>''', '''<div className="text-lg font-bold text-on-surface">{formatCurrency(annualExpenses)}</div>''', 1)
content = content.replace('''<div className="text-lg font-bold text-primary">฿ 0.00</div>''', '''<div className="text-lg font-bold text-primary">{formatCurrency(noi)}</div>''', 1)
content = content.replace('''<div className="text-4xl font-bold text-primary">฿ 0.00</div>''', '''<div className="text-4xl font-bold text-primary">{formatCurrency(targetPrice)}</div>''', 1)

# Summary display values
content = content.replace('''<h4 className="font-headline-lg-mobile md:font-headline-lg">
                  ฿ 0.00
                </h4>''', '''<h4 className="font-headline-lg-mobile md:font-headline-lg">
                  {formatCurrency(noi)}
                </h4>''', 1)
content = content.replace('''<h4 className="font-headline-lg-mobile md:font-headline-lg">
                  ฿ 0.00
                </h4>''', '''<h4 className="font-headline-lg-mobile md:font-headline-lg">
                  {formatCurrency(targetPrice)}
                </h4>''', 1)

with open("src/app/properties/new/step3/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)
