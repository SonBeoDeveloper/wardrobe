// Shared shell for the authenticated area (Tài khoản + Ảnh của tôi).
// Will hold the account sidebar/tab navigation per BA doc User/overview.md §F.
export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
