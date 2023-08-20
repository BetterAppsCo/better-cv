class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :email
      t.string :job_title
      t.string :professional_summary
      t.belongs_to :user, foreign_key: true
      t.timestamps
    end
  end
end
