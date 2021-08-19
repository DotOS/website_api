interface Device {
	codename: string | string[];
	deviceName: string;
	brand: string;
	ota: boolean;
	active: boolean;
	deviceChangelog: Changelog[] | null;
	releases: Releases[] | null;
	maintainer: Maintainer;
	links: Links;
}
interface Changelog {
	timestamp: number;
	changes: string[];
}
interface Releases {
	type: "gapps" | "vanilla";
	generatedAt: number;
	fileName: string;
	url: string;
	requireCleanFlash: boolean;
	size: number;
	version: string;
	latest: boolean;
}
interface Maintainer {
	name: string;
	profileURL: string;
}
interface Links {
	xda: string;
	telegram: string;
}
interface Statistics {
	data: StatsDevice[];
	blacklist: string[];
}
interface StatsDevice {
	codename: string | string[];
	deviceName: string;
	brand: string;
}
