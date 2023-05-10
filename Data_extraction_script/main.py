from datetime import datetime
import pandas as pd
import os


def extract_data(filepath, region):
    country_data = pd.read_csv(filepath)
    country_data = country_data.loc[
        (country_data["confidence"] == 100) &
        (country_data["latitude"].notnull()) &
        (country_data["longitude"].notnull()) &
        (country_data["brightness"].notnull() & country_data["brightness"] != 0) &
        (country_data["acq_date"].notnull()) &
        (country_data["frp"].notnull() & country_data["frp"] != 0),
        ["latitude", "longitude", "brightness", "acq_date", "confidence", "frp"]]
    country_data['region'] = region

    country_data = country_data.reset_index(drop=True)
    country_data = remove_dup_by_dist(country_data, round(10/111, 4))
    return country_data


def remove_dup_by_dist(country_data, square_radius):
    prev_date = "0000-00-00"
    if len(country_data) >= 1:                       # Don't run if empty dataframe
        for index, row in country_data.iterrows():
            date = row["acq_date"]

            search = country_data.loc[country_data['acq_date'] == date]

            for search_index, search_row in search.iterrows():
                if not search_index == index:
                    if (abs(search_row["longitude"] - row["longitude"]) < square_radius) and (abs(search_row["latitude"] - row["latitude"]) < square_radius):
                        country_data = country_data.drop(search_index)  # remove the old value
            prev_date = date
    return country_data


def slice_name(country_path):
    r_name = country_path[25:]
    r_name = r_name.split('.')[:-1]  # remove  .csv
    r_name = r_name[0].replace("_", " ")  # replace _ with space
    print(r_name)
    return r_name


if __name__ == '__main__':
    for subdir in os.listdir("per_year"):
        sub_dir_path = os.path.join("per_year", subdir)
        year = sub_dir_path[9:]
        print("Working on year: " + year + " at time: " + str(datetime.now().strftime("%H:%M:%S")))
        all_countries_per_year = pd.DataFrame(
            columns=["latitude", "longitude", "brightness", "acq_date", "confidence", "region"])

        entries = 0
        regions = 0

        if os.path.isdir(sub_dir_path):  # Make sure it's a subdirectory
            for file in os.listdir(sub_dir_path):
                regions += 1
                country_file = os.path.join(sub_dir_path, file)
                region_name = slice_name(country_file)

                df_country = extract_data(country_file, region_name)

                entries += len(df_country)
                all_countries_per_year = pd.concat([all_countries_per_year, df_country], ignore_index=True)
                all_countries_per_year = all_countries_per_year.sort_values(by="acq_date")

            # all_countries_per_year.to_csv("output/" + year + ".csv", index=False) //Uncomment for csv-files
            all_countries_per_year.to_json("./output/" + year + ".json", orient="records")


        print(str(regions) + " year " + sub_dir_path)
        print(str(len(all_countries_per_year)) + " fires extracted from " + sub_dir_path)


