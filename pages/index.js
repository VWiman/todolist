import List from "@/components/list";
import Form from "@/components/form";

export default function Home() {
	return (
		<main className="flex flex-col w-full h-screen items-center pt-20 gap-4">
			<h1 className=" text-4xl font-semibold" >What to do?</h1>
			<Form />
			<List />
		</main>
	);
}
