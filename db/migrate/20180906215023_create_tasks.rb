class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.date :date
      t.string :description

      t.timestamps
    end
  end
end
