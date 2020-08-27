import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';

export async function find_keys(from: 'projects' | 'posts') {
    return await readdir(from);
}

export function parse_entry(source: string) {
	let result = matter(source);
	let meta = result.data;

	return {
		meta: {
			...meta,
			timestamp: + new Date(meta.published ?? meta.updated ?? meta.started),
			published: meta.published?.toUTCString() ?? null,
			updated: meta.updated?.toUTCString() ?? null,
			started: meta.started?.toUTCString() ?? null,
		},
		content: result.content
	}
}

export async function find_entries(from: 'projects' | 'posts') {
    let keys = await find_keys(from);
    let entries = [];

    for (let file of keys) {
		let data = await readFile(`${from}/${file}`);
		entries.push(parse_entry(data.toString()).meta);
	}

	entries.sort((a, b) => b.timestamp - a.timestamp);
	
	return entries;
}
