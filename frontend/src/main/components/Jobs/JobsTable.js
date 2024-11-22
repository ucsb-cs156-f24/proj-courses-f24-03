import React from "react";
import OurTable, { DateColumn } from "main/components/OurTable";
import { Link } from "react-router-dom";

export default function JobsTable({ jobs }) {
  const testid = "JobsTable";

  const truncateLog = (log) => {
    if (log) {
      const lines = log.split("\n");

      //not able to test for tags. \n gets stripped in html output
      //Stryker disable all
      return lines.slice(0, 10).join("\n");
      //Stryker restore all
    }
    console.log("empty");
    return "";
  };

  const columns = [
    {
      Header: "id",
      accessor: "id", // accessor is the "key" in the data
    },
    DateColumn("Created", (cell) => cell.row.original.createdAt),
    DateColumn("Updated", (cell) => cell.row.original.updatedAt),
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Log",
      id: "Log",
      Cell: ({ cell }) => {
        const log = cell.row.original.log;
        const id = cell.row.original.id;
        const truncatedLog = truncateLog(log);
        return (
          <div>
            <pre>{truncatedLog}</pre>
            {log && log.split("\n").length > 10 && (
              <div>
                <pre>...</pre>
                <Link
                  to={`/admin/jobs/logs/${id}`}
                  date-testid={`${testid}-see-entire-log-${id}`}
                >
                  [See entire log]
                </Link>
              </div>
            )}
          </div>
        );
      },
    },
  ];

  const sortees = React.useMemo(
    () => [
      {
        id: "id",
        desc: true,
      },
    ],
    // Stryker disable next-line all
    [],
  );

  return (
    <OurTable
      data={jobs}
      columns={columns}
      testid={testid}
      initialState={{ sortBy: sortees }}
    />
  );
}
