import SideNav from "../ui/component/sidenav";

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="m-4 flex">
            <div className="p-4">
                <SideNav></SideNav>
            </div>
            <div className="p-4">
                {children}
            </div>
        </div>
    )
}