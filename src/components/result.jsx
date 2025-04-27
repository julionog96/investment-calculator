import { formatter } from "../util/investment";

export default function Result({ results }) {
    console.log(results);

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
                            <th>{item.annualInvestment}</th>
                            <th>{item.interest}</th>
                            <th>{item.totalInterest}</th>
                            <th>{item.valueEndOfYear}</th>                     
                        </tr>
                    ))}
                
                </tbody>
            </table>
    )

}