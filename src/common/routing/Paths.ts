import Home from "../../features/home/Home";
import LinkPath from "./LinkPath";

export default class Paths {
	public static Home(): LinkPath {
		return new LinkPath("/", "Home", Home);
	}

	public static AllPaths(): Array<LinkPath> {
		return [this.Home()];
	}
}
