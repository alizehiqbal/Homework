class Actor < ApplicationRecord

  has_many :castings,
  class_name: 'Casting',
  foreign_key: :actor_id,
  primary_key: :id

  shorthand for:
  has_many :movies,
  through: :castings,
  source: :movie

  has_many :directed_movies,
  foreign_key: :director_id,
  class_name: "Movie"
  primary_key: :id
end

class Casting < ApplicationRecord
  belongs_to :actor,
  class_name: 'Actor',
  foreign_key: :actor_id,
  primary_key: :id


  belongs_to :movie,
  class_name: 'Movie',
  foreign_key: :movie_id,
  primary_key: :id
end
