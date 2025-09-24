import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

export default function About() {
  return (
    <div className="p-8 space-y-4">
        <Header />
      <h1 className="text-2xl font-bold">About Page</h1>

      <div className="space-x-2">
        {/* Small button with rounded-sm */}
        <Button size="sm" shape="rounded-sm" />

        {/* Medium button with rounded-md */}
        <Button size="md" shape="rounded-md" />

        {/* Large button with rounded-lg */}
        <Button size="lg" shape="rounded-lg" />
      </div>
    </div>
  );
}
