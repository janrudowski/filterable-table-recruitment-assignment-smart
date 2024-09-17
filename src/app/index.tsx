import UsersView from "@/features/users/components/users-view";
import AppProvider from "./provider";
import { DarkModeSwitch } from "@/features/dark-mode/components/dark-mode-switch";

export default function App() {
  return (
    <AppProvider>
      <div className="flex justify-end p-4">
        <DarkModeSwitch />
      </div>
      <UsersView />
    </AppProvider>
  );
}
