class World < ApplicationRecord
  belongs_to :user
  has_many :step
end
