require 'rest-client'
require 'json'
Planet.destroy_all

response = RestClient.get 'https://api.le-systeme-solaire.net/rest/bodies'
result = JSON.parse response
planets = result["bodies"].select do |body|
    body["isPlanet"]
end

def has_water 
    [true, false].sample
end


planets.each do |planet|
    Planet.create(
        englishName: planet["englishName"],
        gravity: planet["gravity"],
        radius: planet["polarRadius"],
        avg_home_price: rand(100..1000000000),
        temperature: rand(-388..800),
        distance_from_earch: rand(41..999),
        has_water: has_water,
        image: "~frontend/src/assets/" + planet["englishName"].gsub(/\s+/, "")
        )
end
