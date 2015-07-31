class CreateArtInstallations < ActiveRecord::Migration
  def change
    create_table :art_installations do |t|
      t.string :content
      t.string :installation_name
      t.string :artist_name
      t.string :artist_location
      t.string :url
      t.string :photo_url
      t.string :email
      t.string :donate_link

      t.timestamps null: false
    end
  end
end
