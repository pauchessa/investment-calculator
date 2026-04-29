import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultsTable({ form }) {
  const annualData = calculateInvestmentResults(form);

  function deriveRows(form, annualData) {
    let rows = [];
    for (let i = 1; i <= form.duration; i++) {
      rows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{formatter.format(annualData[i - 1].valueEndOfYear)}</td>
          <td>{formatter.format(annualData[i - 1].interest)}</td>
          <td>
            {formatter.format(
              annualData[i - 1].valueEndOfYear -
                (form.initialInvestment +
                  form.annualInvestment * annualData[i - 1].year),
            )}
          </td>
          <td>
            {formatter.format(
              form.initialInvestment +
                form.annualInvestment * annualData[i - 1].year,
            )}
          </td>
        </tr>,
      );
    }
    return rows;
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="center">{deriveRows(form, annualData)}</tbody>
    </table>
  );
}
