import React, {useState} from 'react';

export const FetchedDataContext = React.createContext();
export const BookmarkedDataContext = React.createContext();

export const DataProvider = ({children}) => {
	
	const [fetchedData, setFetchedData] = useState([]);
	const [bookmarkedData, setBookmarkedData] = useState([]); 

	return (
		<FetchedDataContext.Provider value={[fetchedData, setFetchedData]}>
			<BookmarkedDataContext.Provider value={[bookmarkedData, setBookmarkedData]}>
				{children}
			</BookmarkedDataContext.Provider>
		</FetchedDataContext.Provider>
	);
};