import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { inject, observer } from "mobx-react";
import styles from "./styles";
import RNPickerSelect from "react-native-picker-select";
import { Actions } from "react-native-router-flux";

@inject("moviesPageStore")
@observer
class Filters extends React.Component {
  static defaultProps = {
    optionsSortBy: [
      {
        label: "Популярные по убыванию",
        value: "popularity.desc"
      },
      {
        label: "Популярные по возростанию",
        value: "popularity.asc"
      },
      {
        label: "Рейтинг по убыванию",
        value: "vote_average.desc"
      },
      {
        label: "Рейтинг по возростанию",
        value: "vote_average.asc"
      }
    ],

    optionsPrimaryReleaseYear: [
      {
        label: "2018",
        value: "2018"
      },
      {
        label: "2017",
        value: "2017"
      },
      {
        label: "2016",
        value: "2016"
      },
      {
        label: "2015",
        value: "2015"
      }
    ]
  };

  handleChangeSortBy = value => {
    this.props.moviesPageStore.onChangeFilters({
      target: {
        name: "sort_by",
        value
      }
    });
  };

  handleChangePrimaryReleaseYear = value => {
    this.props.moviesPageStore.onChangeFilters({
      target: {
        name: "primary_release_year",
        value
      }
    });
  };

  render() {
    const { filters } = this.props.moviesPageStore;
    const { optionsSortBy, optionsPrimaryReleaseYear } = this.props;
    return (
      <View>
        <View>
          <Text style={styles.text}>Сортировка по:</Text>
          <RNPickerSelect
            placeholder={{
              label: "Выберите сортировку",
              value: null,
              color: "black"
            }}
            onValueChange={this.handleChangeSortBy}
            value={filters.sort_by}
            items={optionsSortBy}
            style={{ ...styles }}
          />
          <RNPickerSelect
            placeholder={{
              label: "Выберите сортировку",
              value: null,
              color: "black"
            }}
            onValueChange={this.handleChangePrimaryReleaseYear}
            value={filters.primary_release_year}
            items={optionsPrimaryReleaseYear}
            style={{ ...styles }}
          />

          {/* <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              Actions.movies();
            }}
          >
            <Text style={styles.buttonText}>Return to movies </Text>
          </TouchableOpacity> */}
          <View style={styles.filterButtons}>
            <Button
              title="Return to movies"
              style={styles.buttonContainer}
              onPress={() => {
                Actions.movies();
              }}
            />

            {/* <Button
              title="Next"
              style={styles.buttonContainer}
              onPress={nextPage}
            >
              Reset filters
            </Button> */}
          </View>
        </View>
      </View>
    );
  }
}

export default Filters;
