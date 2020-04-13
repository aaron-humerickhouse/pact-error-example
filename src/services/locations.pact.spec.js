import * as Matchers from "@pact-foundation/pact/dsl/matchers";

import LocationsService from "./locations";

describe("LocationService", () => {


  const EXPECTED_BODY = {
    locations: [
      {
        id: 1,
        name: "Bedside Table Bowl",
        lane_count: 24,
        has_restaurant: true,
        has_bar: true,
        address_id: 2,
        created_at: "2020-04-13T03:21:34.548Z",
        updated_at: "2020-04-13T03:21:34.548Z"
      },
      {
        id: 1,
        name: "Bedside Table Bowl",
        lane_count: 24,
        has_restaurant: true,
        has_bar: true,
        address_id: 2,
        created_at: "2020-04-13T03:21:34.548Z",
        updated_at: "2020-04-13T03:21:34.548Z"
      },
    ]
  };

  describe("getLocations", () => {
    beforeEach(() => {
      const interaction = {
        state: "there is a list of locations",
        uponReceiving: "a request for retrieving locations",
        withRequest: {
          method: "GET",
          path: "/api/v1/locations.json",
          query: {},
          headers: {
            Accept: "application/json",
          },
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            locations: [
              Matchers.eachLike({
                id: Matchers.integer(1),
                name: Matchers.like("Bedside Table Bowl"),
                lane_count: Matchers.like(24),
                has_restaurant: Matchers.boolean(true),
                has_bar: Matchers.boolean(true),
                address_id: Matchers.integer(2),
                created_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z"),
                updated_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z")
              }, {min: 2}),
            ]
          },
        },
      };

      return provider.addInteraction(interaction);
    });

    it("returns a successful body", () => {
      new LocationsService().getLocations()
        .then((response) => {
          expect(response.data).toStrictEqual('a')
        })
        .then(() => {
          provider.verify()
        })
    })
  })
});
