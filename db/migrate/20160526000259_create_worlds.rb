class CreateWorlds < ActiveRecord::Migration[5.0]
  def change
    create_table :worlds do |t|
      t.integer :user_id
      t.string :name

      t.timestamps
    end
  end
end
