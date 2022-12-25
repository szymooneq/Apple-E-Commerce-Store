import { createContext, useState } from 'react';

const Context = createContext();

interface AppContext {
	children: React.ReactNode;
}

function AppContext({ children }: AppContext) {
	return <Context.Provider>{children}</Context.Provider>;
}

export default AppContext;
