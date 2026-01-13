import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import { Headers } from "components";

import type { Route } from "./+types/create-trip";
import { useNavigate } from "react-router";

export const loader = async () => {
  const response = await fetch(
    "https://restcountries.com/v3.1/independent?status=true"
  );
  const data = await response.json();

  return data.map((country: any) => ({
    flags: country.flags.svg || country.flags.png,
    alt: country.flags.alt || `Flag of ${country.name.common}`,
    name: country.name.common,
    coordinates: country.latlng,
    value: country.name.common,
    openStreetMap: country.maps?.openStreetMap,
  }));
};

const createTrip = ({ loaderData }: Route.ComponentProps) => {
  const countries = loaderData as Country[];
  const navigate = useNavigate();

  const countryData = countries.map((country) => ({
    text: country.name,
    flagUrl: country.flags,
    value: country.value,
  }));
  const handleSubmit = async () => {};

  const handleChange = (key: keyof TripFormData, value: string | number) => {};

  return (
    <main className="flex flex-col gap-10 pb-20 wrapper">
      <Headers
        title="Add a New Trip"
        description="View and edit AI Generated travel plans"
      />

      <section className="mt-2.5 wrapper-md">
        <form className="trip-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="country">Country</label>
            <ComboBoxComponent
              id="country"
              dataSource={countryData}
              fields={{ text: "text", value: "value" }}
              placeholder="Select a Country"
              className="combo-box"
              change={(e: { value: string | undefined }) => {
                if (e.value) {
                  handleChange("country", e.value);
                }
              }}
              allowFiltering
              filtering={(e) => {
                // Syncfusion ComboBox filtering event uses e.text (not e.target.value like standard HTML events)
                const query = e.text.toLowerCase();
                e.updateData(
                  countries
                    .filter((country) =>
                      country.name.toLowerCase().includes(query)
                    )
                    .map((country) => ({
                      text: country.name,
                      value: country.value,
                    }))
                );
              }}
            />
          </div>

          <div>
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              name="duration"
              type="number"
              placeholder="Enter a number of days"
              className="form-input placeholder:text-gray-100"
              onChange={(e) => handleChange("duration", Number(e.target.value))}
            />
          </div>
        </form>
      </section>
    </main>
  );
};

export default createTrip;
