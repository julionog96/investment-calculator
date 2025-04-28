import { formatter } from "../util/investment";

export default function Result({ results }) {

    return (
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investiment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>

                </thead>
                <tbody>
                    {results?.map((item, index) => (
                        <tr key={index}>
                            <th>{item.year}</th>
                            <th>{formatter.format(item.annualInvestment)}</th>
                            <th>{formatter.format(item.interest)}</th>
                            <th>{formatter.format(item.totalInterest)}</th>
                            <th>{formatter.format(item.valueEndOfYear)}</th>                     
                        </tr>
                    ))}
                
                </tbody>
            </table>
    )

}