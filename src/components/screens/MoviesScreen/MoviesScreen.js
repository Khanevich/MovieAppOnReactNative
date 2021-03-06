import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { inject, observer } from "mobx-react";
import MovieItem from "./MoviePage/MovieItem";
import Header from "../../Header/Header";
import Loader from "../../Loader/Loader";

@inject("moviesPageStore")
@observer
class MoviesScreen extends React.Component {
	componentDidMount() {
		this.props.moviesPageStore.getMovies();
	}

	render() {
		const { isLoading, movies, openFilters } = this.props.moviesPageStore;
		return (
			<View style={styles.container}>
				<Header />
				<View style={{ flex: 1 }}>
					{isLoading ? (
						<Loader />
					) : (
						<FlatList
							style={{ flex: 1 }}
							data={movies}
							renderItem={({ item }) => <MovieItem item={item} />}
							keyExtractor={item => String(item.id)}
						/>
					)}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFF"
	}
});

export default MoviesScreen;
