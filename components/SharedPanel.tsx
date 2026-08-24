import type { ReactNode } from "react";

type SharedPanelProps = {
  children: ReactNode;
  className?: string;
  testId?: string;
};

export default function SharedPanel({
  children,
  className = "",
  testId,
}: SharedPanelProps) {
  return (
    <div className={`shared-panel ${className}`.trim()} data-testid={testId}>
      {children}
    </div>
  );
}
