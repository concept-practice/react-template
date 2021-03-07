import FleetContainer from '../../features/fleet/FleetContainer';
import Home from '../../features/home/Home';
import LinkPath from './LinkPath';

export default class Paths {
	public static Home(): LinkPath {
		return new LinkPath('/', 'Home', Home);
	}

	public static Fleet(): LinkPath {
		return new LinkPath('/fleet', 'Fleet', FleetContainer);
	}

	public static AllPaths(): Array<LinkPath> {
		return [this.Fleet(), this.Home()];
	}
}
