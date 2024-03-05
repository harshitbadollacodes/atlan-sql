import { formatColumnName } from "../../utils/stringUtils";
import {
  TD,
  TBody,
  THead,
  TH,
  QueryResultTableContainer,
} from "./queryResultTableStyles";

const QueryResultTable = ({ queryData }) => {
  const columnHeaders = Object.keys(queryData[0]);

  const rows = queryData.map((entry) => (
    <tr key={entry.id}>
      {columnHeaders.map((header, index) => (
        <TD key={index}>{entry[header]}</TD>
      ))}
    </tr>
  ));

  return (
    <QueryResultTableContainer>
      <h3>Query Result</h3>
      <table>
        <THead>
          <tr>
            {columnHeaders.map((header) => (
              <TH key={header}>{formatColumnName(header)}</TH>
            ))}
          </tr>
        </THead>

        <TBody>{rows}</TBody>
      </table>
    </QueryResultTableContainer>
  );
};

export default QueryResultTable;
