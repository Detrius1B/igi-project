"use client";

import { Box } from "@mui/material";

const MANAGER_LINKS = [
  {
    label: "Employee List",
    link: "/employee-list",
    slug: "employee-list",
  },
  {
    label: "Other Page for Employee",
    link: "/employee-list",
    slug: "employee-list",
  },
];

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Box>
        {MANAGER_LINKS.map((item) => (
          <Box key={`manager-link-${item.slug}`}>{item.label}</Box>
        ))}
      </Box>
      {children}
    </Box>
  );
}
