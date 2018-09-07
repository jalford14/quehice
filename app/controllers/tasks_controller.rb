class TasksController < ApplicationController
    protect_from_forgery

    def index
        @tasks = Task.all
    end

    def new
    end

    def create
        @task = Task.new(params.require(:task).permit(:description, :date))

        @task.save
    end
    
    def show
    end
end
