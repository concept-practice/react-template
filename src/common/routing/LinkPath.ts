export default class LinkPath {
	constructor(private path: string, private pathName: string, private component: React.FC) {}

	public get Path(): string {
		return this.path;
	}

	public get PathName(): string {
		return this.pathName;
	}

	public get Component(): React.FC {
		return this.component;
	}
}
