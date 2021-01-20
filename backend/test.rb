require 'rest-client'
require 'pry'
require 'json'
# Planet.destroy_all

response = RestClient.get 'https://api.le-systeme-solaire.net/rest/bodies'
result = JSON.parse response
planets = result["bodies"].select do |body|
    body["isPlanet"]
end

def create_planets 
    planets.map |planet| do
    Planet.create(
        englishName: planet["englishName"],
        gravity: planet["gravity"],
        radius: planet["polarRadius"]
    )
    end
end

