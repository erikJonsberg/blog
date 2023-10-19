"use client";

import { useState, useEffect, use } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export function Code({
	language,
	children,
}: {
	language: string;
	children: string;
}) {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (copied === true) {
			setTimeout(() => setCopied(false), 1000);
		}
	}, [copied]);

	const copyCode = () => {
		navigator.clipboard.writeText(children);
		setCopied(true);
	};

	return (
		<div className='rounded-lg relative'>
			<SyntaxHighlighter wrapLongLines language={language} style={oneDark}>
				{children}
			</SyntaxHighlighter>
			<button
				onClick={copyCode}
				className='absolute top-0 right-0 p-2 text-white rounded-lg'
			>
				{copied ? (
					<CheckIcon className='w-6 h-6 bg-green-600' />
				) : (
					<ClipboardIcon className='w-6 h-6 text-white' />
				)}
			</button>
		</div>
	);
}
