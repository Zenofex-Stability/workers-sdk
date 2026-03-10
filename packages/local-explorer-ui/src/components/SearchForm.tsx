import { Button } from "@cloudflare/kumo";
import { useState } from "react";

interface SearchFormProps {
	onSearch: (prefix: string) => void;
	disabled?: boolean;
}

export function SearchForm({ onSearch, disabled = false }: SearchFormProps) {
	const [prefix, setPrefix] = useState("");

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		onSearch(prefix);
	};

	return (
		<form className="flex gap-2 items-center" onSubmit={handleSubmit}>
			<label className="sr-only" htmlFor="search-prefix">
				Search keys by prefix
			</label>
			<input
				id="search-prefix"
				className="flex-1 max-w-[400px] font-mono bg-bg text-text py-2 px-3 text-sm border border-border rounded-md focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(255,72,1,0.15)] disabled:bg-bg-secondary disabled:text-text-secondary"
				placeholder="Search keys by prefix..."
				value={prefix}
				onChange={(e) => setPrefix(e.target.value)}
				disabled={disabled}
			/>
			<Button type="submit" variant="secondary" disabled={disabled}>
				Search
			</Button>
		</form>
	);
}
