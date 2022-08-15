import React, { Component, memo, PureComponent } from 'react';

type IUser = {
    name: string;
    age: number;
};

type IProps = {
    user: IUser;
};

// functional component
const FirstComponent = memo(({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
));

// functional component
const areEqualSecondaryComponentProps = (
    prevProps: Readonly<IProps>,
    nextProps: Readonly<IProps>
) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

const SecondComponent = memo(
    ({ user: { name, age } }: IProps) => (
        <div>
            my name is {name}, my age is {age}
        </div>
    ),
    areEqualSecondaryComponentProps
);

// class component
class ThirdComponent extends PureComponent<IUser> {
    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        );
    }
}

// class component
class FourthComponent extends Component<IProps> {
    shouldComponentUpdate(nextProps: Readonly<IProps>): boolean {
        return JSON.stringify(this.props) !== JSON.stringify(nextProps);
    }
    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is{' '}
                {this.props.user.age}
            </div>
        );
    }
}
