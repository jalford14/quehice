class TasksController < ApplicationController
    protect_from_forgery

    def index
        @tasks = Task.all
    end

    def new
    end

    def create
        @task = Task.new(task_params)

        @task.save
        redirect_to "/tasks"
    end

    def edit
        @task = Task.find(params[:id])
    end

    def update
        @task = Task.find(params[:id])

        if @task.update(task_params)
            redirect_to "/tasks"
        else
            render :edit
        end
    end

    def destroy
        @task = Task.find(params[:id])
        @task.destroy

        redirect_to "/tasks"
    end

    private
    def task_params
        params.require(:task).permit(:description, :date)
    end
end
