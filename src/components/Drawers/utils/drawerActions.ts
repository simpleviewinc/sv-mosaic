export const drawerActions = {
	navigateForward({ to }: { to: any }) {
		return async function (dispatch, getState): Promise<void> {
			const newDrawers = [...getState().drawers, to];

			await dispatch({
				type: "UPDATE_DRAWERS",
				value: newDrawers
			});
		};
	},
	navigateBack({ childData }: { childData?: any }) {
		return async function (dispatch, getState): Promise<void> {
			const newDrawers = getState().drawers;
			newDrawers.pop();

			if (childData && newDrawers.length > 0) {
				newDrawers[newDrawers.length - 1] = {
					...newDrawers[newDrawers.length - 1],
					args: {
						...newDrawers[newDrawers.length - 1].args,
						childData
					}
				};
			}

			await dispatch({
				type: "UPDATE_DRAWERS",
				value: newDrawers
			});
		};
	},
	navigateBackApp2() {
		return async function (dispatch, getState): Promise<void> {
			const newDrawers = [...getState().drawers];
			newDrawers.pop();

			await dispatch({
				type: "UPDATE_DRAWERS",
				value: newDrawers
			});
		};
	}
};
