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
        redirect_to "/tasks"
    end
    
    def show
    end
end
