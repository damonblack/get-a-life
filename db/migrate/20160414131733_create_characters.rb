class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.integer :user_id
      t.json :character_sheet

      t.timestamps null: false
    end
  end
end
