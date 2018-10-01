class Task < ApplicationRecord
    validates :date, :description, presence: true
end
