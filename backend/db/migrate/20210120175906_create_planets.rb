class CreatePlanets < ActiveRecord::Migration[6.1]
  def change
    create_table :planets do |t|
      t.string :englishName
      t.float :gravity
      t.integer :radius
      t.integer :avg_home_price
      t.integer :temperature
      t.integer :distance_from_earch
      t.boolean :has_water

      t.timestamps
    end
  end
end
