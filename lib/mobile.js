/**
 *
 * @namespace faker.mobile
 */
var Mobile = function (faker) {
    var self = this;
    var fake = faker.fake;

    /**
     * Mobile
     *
     * @method faker.mobile.mobile
     */
    self.mobile = function () {
      return fake('{{mobile.manufacturer}}, {{mobile.screen}}');
    };

    self.mobile.schema = {
      "description": "Generates a random mobile",
      "sampleResults": ["Apple", "Samsung", "OPPO", "Vivo"]
    };

    /**
     * manufacturer
     *
     * @method faker.mobile.manufacturer
     */
    self.manufacturer = function () {
      return faker.random.arrayElement(faker.definitions.mobile.manufacturer);
    };

    self.manufacturer.schema = {
      "description": "Generates a manufacturer name.",
      "sampleResults": ["Apple", "Samsung", "OPPO", "Vivo", "Huwaei", "Realme", "Xiaomi"]
    };

/**
     * sim
     *
     * @method faker.mobile.sim
     */
    self.sim = function () {
      return faker.random.arrayElement(faker.definitions.mobile.sim);
    };

    self.sim.schema = {
      "description": "Generates a manufacturer name.",
      "sampleResults": ["Airtel", "Vodafone", "Jio"]
    };


    /**
     * screen//
     *
     * @method faker.mobile.screen
     */
    self.screen = function () {
      return faker.random.arrayElement(faker.definitions.mobile.screen);
    };

    self.screen.schema = {
      "description": "Generates a Mobile screen.",
      "sampleResults": ["5.5 Inches", "6 Inches", "6.5 Inches"]
    };

    /**
     *
     * @method faker.mobile.OS
     */
    self.OS = function () {
      return faker.random.arrayElement(faker.definitions.mobile.OS);
    };

    self.OS.schema = {
      "description": "Generates an Operating System type.",
      "sampleResults": ["Android", "iOS"]
    };

    /**
     * color
     *
     * @method faker.mobile.color
     */
    self.color = function () {
      return fake('{{commerce.color}}');
    };

    self.color.schema = {
      "description": "Generates a color",
      "sampleResults": ["Grey", "White", "Black"]
    };
  };

  module["exports"] = Mobile;

