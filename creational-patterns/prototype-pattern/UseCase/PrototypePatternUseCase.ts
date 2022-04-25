class Prototype {
    private developmentStage: string;
    private releaseDate: Date;

    public setDevelopmentStage = (newDevelopmentStage: string) => {
        this.developmentStage = newDevelopmentStage;
    }

    public getDevelopmentStage = (): string => {
        return this.developmentStage;
    }

    public setReleaseDate = (newReleaseDate: Date) => {
        this.releaseDate = newReleaseDate;
    }

    public getReleaseDate = (): Date => {
        return this.releaseDate;
    }

    public clone = (): this => {
        const clone = Object.create(this);
        clone.component = Object.create(this.releaseDate);

        return clone;
    }
}

const main = () => {
    const prototype = new Prototype();
    prototype.setDevelopmentStage('Staging');
    prototype.setReleaseDate(new Date());

    const stagingClone = prototype.clone();
    console.log(stagingClone.getDevelopmentStage());
    console.log(stagingClone.getReleaseDate());
}

main();
