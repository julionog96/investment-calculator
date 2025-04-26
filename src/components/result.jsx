import ResultRow from "./result-row"

export default function Result() {
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
                    <ResultRow />
                    <ResultRow />
                </tbody>
            </table>
    )

}