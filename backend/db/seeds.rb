require 'rest-client'
require 'json'
Planet.destroy_all

response = RestClient.get 'https://api.le-systeme-solaire.net/rest/bodies'
result = JSON.parse response
planets = result["bodies"].select do |body|
    body["isPlanet"]
end

planets.each do |planet|
    Planet.create(
        englishName: planet["englishName"],
        gravity: planet["gravity"],
        radius: planet["polarRadius"]
    )
end
